import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
    driver: ApolloGatewayDriver,
    server: {
      playground: true,
        introspection: true,
      cors: true,
    },
    gateway: {
      supergraphSdl: new IntrospectAndCompose({
        subgraphs: [
          { name: 'employees', url: 'http://localhost:3000/graphql' },
          { name: 'location', url: 'http://localhost:3002/graphql' },
          { name: 'projects', url: 'http://localhost:3001/graphql' },
        ],
      }),
    },
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
