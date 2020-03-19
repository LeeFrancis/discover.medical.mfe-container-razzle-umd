import { Component } from 'react';
import mfeBuildHelper from '../../util/mfeBuildHelper';

export default class MicroFrontEnds extends Component {
  static Topic = mfeBuildHelper('/topic', 'TopicComponent');
}