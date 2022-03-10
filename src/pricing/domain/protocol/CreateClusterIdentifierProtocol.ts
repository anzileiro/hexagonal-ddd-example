import { Configuration } from '../model/Configuration';

export interface CreateClusterIdentifierProtocol {
  id: string | number | any;
  name: string;
  configuration: Configuration;
}
