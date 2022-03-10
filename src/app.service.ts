import { Injectable } from '@nestjs/common';
import { Cluster } from './pricing/domain/model/Cluster';
import { CreateClusterCommandProtocol } from './pricing/domain/protocol/CreateClusterCommandProtocol';
import { CreateClusterIdentifierProtocol } from './pricing/domain/protocol/CreateClusterIdentifierProtocol';
import { PricingApplication } from './pricing/PricingApplication';

@Injectable()
export class AppService {
  private readonly pricingApplication: PricingApplication;

  public constructor() {
    this.pricingApplication = new PricingApplication();
  }

  create(
    create: CreateClusterCommandProtocol,
  ): CreateClusterIdentifierProtocol {
    return this.pricingApplication.createCluster(create);
  }
}
