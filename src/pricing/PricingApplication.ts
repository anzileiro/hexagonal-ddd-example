import { CreateClusterUseCase } from './application/use-case/CreateClusterUseCase';
import { CreateClusterCommandProtocol } from './domain/protocol/CreateClusterCommandProtocol';
import { CreateClusterRepository } from './infrastructure/repository/CreateClusterRepository';

export class PricingApplication {
  public readonly repository: CreateClusterRepository;
  public readonly useCase: CreateClusterUseCase;

  public constructor() {
    this.repository = new CreateClusterRepository();
    this.useCase = new CreateClusterUseCase();
  }

  public createCluster(create: CreateClusterCommandProtocol) {
    return this.useCase.execute(create, this.repository);
  }
}
