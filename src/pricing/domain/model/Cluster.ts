import { ClusterException } from '../exception/ClusterException';
import { Configuration } from './Configuration';

export class Cluster {
  private name: string;
  private configuration: Configuration;

  public constructor(name: string, configuration: Configuration) {
    if (!name) {
      throw ClusterException.InvalidName(name);
    }

    if (!configuration) {
      throw ClusterException.InvalidConfiguration(configuration);
    }

    this.name = name;
    this.configuration = configuration;
  }

  public getName(): string {
    return this.name;
  }

  public getConfiguration(): Configuration {
    return this.configuration;
  }

  public calculate(): string {
    return this.configuration.getValue();
  }

  public toJSON(): any {
    return {
      name: this.name,
      configuration: {
        key: this.configuration.getKey(),
        value: this.configuration.getValue(),
      },
    };
  }
}
