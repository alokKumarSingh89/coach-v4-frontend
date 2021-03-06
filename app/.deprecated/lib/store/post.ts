import { Discussion, Store, User } from '.';
import { action, computed, decorate, observable, runInAction } from 'mobx';

import { editPost } from '../api/team-member';

export class Post {
  _id: string;
  createdUserId: string;
  createdAt: Date;
  discussionId: string;

  discussion: Discussion;
  store: Store;

  isEdited: boolean;
  content: string;
  htmlContent: string;

  constructor(params) {
    Object.assign(this, params);
  }

  get user(): User {
    return this.discussion.topic.team.members.get(this.createdUserId) || null;
  }

  changeLocalCache(data) {
    this.content = data.content;
    this.htmlContent = data.htmlContent;
    this.isEdited = true;
  }

  async edit(data) {
    try {
      await editPost({
        id: this._id,
        content: data.content,
      });

      runInAction(() => {
        this.changeLocalCache(data);
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

decorate(Post, {
  isEdited: observable,
  content: observable,
  htmlContent: observable,

  user: computed,
  changeLocalCache: action,
  edit: action,
});
