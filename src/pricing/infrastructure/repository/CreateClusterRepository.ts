import { ClusterFactory } from 'src/pricing/application/factory/ClusterFactory';
import { Cluster } from 'src/pricing/domain/model/Cluster';
import { CreateClusterIdentifierProtocol } from 'src/pricing/domain/protocol/CreateClusterIdentifierProtocol';
import { CreateClusterRepositoryProtocol } from 'src/pricing/domain/protocol/CreateClusterRepositoryProtocol';

export class CreateClusterRepository
  implements CreateClusterRepositoryProtocol
{
  private readonly factory: ClusterFactory;
  private clusters: Cluster[];

  public constructor() {
    this.clusters = [];
    this.factory = new ClusterFactory();
  }

  save(cluster: Cluster): CreateClusterIdentifierProtocol {
    this.clusters.push(cluster);

    return this.factory.createClusterIdentifier(cluster);
  }
}
