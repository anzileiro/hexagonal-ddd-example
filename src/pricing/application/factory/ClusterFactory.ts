import { Cluster } from 'src/pricing/domain/model/Cluster';
import { CreateClusterIdentifierProtocol } from 'src/pricing/domain/protocol/CreateClusterIdentifierProtocol';

export class ClusterFactory {
  public createClusterIdentifier(
    cluster: Cluster,
  ): CreateClusterIdentifierProtocol {
    return {
      id: 'abc',
      name: cluster.getName(),
      configuration: cluster.getConfiguration(),
    };
  }
}
