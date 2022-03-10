import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateClusterCommandProtocol } from './pricing/domain/protocol/CreateClusterCommandProtocol';
import { CreateClusterIdentifierProtocol } from './pricing/domain/protocol/CreateClusterIdentifierProtocol';

@Controller('v1/clusters')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  public create(
    @Body() create: CreateClusterCommandProtocol,
  ): CreateClusterIdentifierProtocol {
    return this.appService.create(create);
  }
}
