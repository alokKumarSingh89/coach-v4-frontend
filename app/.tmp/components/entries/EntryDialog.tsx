import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  WithStyles,
  withMobileDialog
} from '@material-ui/core';
import { entryDialogStyles, useTheme } from '@assets/theme';

import { EntryDialogProps } from '@assets/declarations';
import { EntryDialogStyles } from '@assets/theme/jss/components/entries/entryDialogStyles';
import EntryModel from '@lib/models/EntryModel';
import Image from 'material-ui-image'
import { InjectedProps } from '@material-ui/core/withMobileDialog';
import React from 'react';

/**
 * Components specific theme styles
 */
const withTheme = useTheme(entryDialogStyles);

/**
 * Entry detail
 */
class EntryDialog extends React.Component<EntryDialogProps & WithStyles<EntryDialogStyles> & InjectedProps> {
  render() {
    const { isOpen, onClose, fullScreen, item } = this.props;
    
    if(!item) {
      return '';
    }

    const model = new EntryModel(item);
    
    return (
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="entry-detail-title"
        scroll={fullScreen ? 'paper' : 'body'}
        // TransitionComponent={Transition}
        maxWidth="sm"
        fullScreen={fullScreen}
      >
        <DialogContent>
          <div><Image src={model.getCover('md')} /></div>
          <Typography variant="title">{model.getTitle()}</Typography>
          <DialogContentText>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed
            consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
            sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
            consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed
            consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
            sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
            consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed
            consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
            sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
            consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed
            consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
            sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
            consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed
            consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
            sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
            consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed
            consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
            sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withMobileDialog()(withTheme(EntryDialog));
