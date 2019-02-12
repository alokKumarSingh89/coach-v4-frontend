import {
  FavoriteRounded as HelpIcon,
  BusinessCenterRounded as JobIcon,
  CardGiftcard as GiftIcon,
  SchoolRounded as WisdomIcon,
  BuildRounded as ServiceIcon,
  Whatshot as DefaultIcon,
  AccessibilityNewRounded as EventIcon,
} from '@material-ui/icons';

import { Coloring } from 'lib/types';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { ComponentType } from 'react';

/**
 * Model resource item
 */
type ModelResource = {
  id: string;
  type: ModelType;
  attributes: Record<string, any>;
};

/**
 * Model types
 */
enum ModelType {
  Help = 'help',
  Gift = 'gift',
  Job = 'job',
  Service = 'service',
  Wisdom = 'wisdom',
  Event = 'event',
}

/**
 * Base Model interface
 */
interface ModelInterface {
  getId: () => number;
  getType: () => ModelType;
  getAttribute(attr: string): any;
  getColoring: () => Coloring;
  getPictogram: () => ComponentType<SvgIconProps>;
}

/**
 * Base model class
 */
class Model implements ModelInterface {
  /**
   * Identification
   */
  protected id: number;

  /**
   * Type
   */
  protected type: ModelType;

  /**
   * Attributes
   */
  protected attributes: Record<string, any>;

  /**
   * Resource name
   */
  protected static resourceName;

  /**
   * Constructor
   */
  constructor(props) {
    const { id, type, attributes } = props;
    this.id = id;
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Retrieves model primary identification
   */
  getId(): number {
    return this.id;
  }

  /**
   * Retrieves model type
   */
  getType(): ModelType {
    return this.type;
  }

  /**
   * Retrieves attribute
   */
  getAttribute(name, fallback: any = null): any {
    return this.attributes[name] ? this.attributes[name] : fallback;
  }

  /**
   * Retrieves model assigned coloring
   */
  getColoring(): Coloring {
    switch (this.getType()) {
      case ModelType.Help:
        return Coloring.Pink;
      case ModelType.Gift:
        return Coloring.Pink;
      case ModelType.Job:
        return Coloring.Green;
      case ModelType.Service:
        return Coloring.Green;
      case ModelType.Wisdom:
        return Coloring.Purple;
      case ModelType.Event:
        return Coloring.Orange;
      default:
        return Coloring.Blue;
    }
  }

  /**
   * Retrieves model assigned piktogram
   */
  getPictogram(): ComponentType<SvgIconProps> {
    switch (this.getType()) {
      case ModelType.Help:
        return HelpIcon;
      case ModelType.Gift:
        return GiftIcon;
      case ModelType.Job:
        return JobIcon;
      case ModelType.Service:
        return ServiceIcon;
      case ModelType.Wisdom:
        return WisdomIcon;
      case ModelType.Event:
        return EventIcon;
      default:
        return DefaultIcon;
    }
  }
}

/**
 * Exports
 */
export { Model, ModelInterface, ModelType, ModelResource}