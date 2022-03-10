import { CreateClusterCommandProtocol } from './CreateClusterCommandProtocol';
import { CreateClusterIdentifierProtocol } from './CreateClusterIdentifierProtocol';
import { CreateClusterRepositoryProtocol } from './CreateClusterRepositoryProtocol';

export interface CreateClusterUseCaseProtocol {
  execute(
    createClusterCommandProtocol: CreateClusterCommandProtocol,
    createClusterRepositoryProtocol: CreateClusterRepositoryProtocol,
  ): CreateClusterIdentifierProtocol;
}
