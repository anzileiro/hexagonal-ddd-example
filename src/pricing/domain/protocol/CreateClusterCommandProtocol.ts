import { Configuration } from '../model/Configuration';

export interface CreateClusterCommandProtocol {
  name: string;
  configuration: Configuration;
}
