import { Cluster } from 'src/pricing/domain/model/Cluster';
import { CreateClusterCommandProtocol } from 'src/pricing/domain/protocol/CreateClusterCommandProtocol';
import { CreateClusterIdentifierProtocol } from 'src/pricing/domain/protocol/CreateClusterIdentifierProtocol';
import { CreateClusterRepositoryProtocol } from 'src/pricing/domain/protocol/CreateClusterRepositoryProtocol';
import { CreateClusterUseCaseProtocol } from 'src/pricing/domain/protocol/CreateClusterUseCaseProtocol';

export class CreateClusterUseCase implements CreateClusterUseCaseProtocol {
  execute(
    createClusterCommandProtocol: CreateClusterCommandProtocol,
    createClusterRepositoryProtocol: CreateClusterRepositoryProtocol,
  ): CreateClusterIdentifierProtocol {
    const cluster = new Cluster(
      createClusterCommandProtocol.name,
      createClusterCommandProtocol.configuration,
    );

    const identifier = createClusterRepositoryProtocol.save(cluster);

    cluster.calculate();

    return identifier;
  }
}
