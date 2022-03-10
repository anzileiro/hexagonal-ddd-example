import { Configuration } from '../model/Configuration';

export class ClusterException extends Error {
  public constructor(message: string) {
    super(message);
    this.name = 'ClusterException';
  }

  public static InvalidName(name: string): ClusterException {
    return new ClusterException(`The name: ${name} is null or undefined.`);
  }

  public static InvalidConfiguration(
    configuration: Configuration,
  ): ClusterException {
    return new ClusterException(
      `The key: ${configuration} is null or undefined.`,
    );
  }
}
