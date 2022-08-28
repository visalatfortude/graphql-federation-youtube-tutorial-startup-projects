import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { Project } from './employee/entity/project.entity';
import { Location } from './employee/entity/location.entity';

@Module({
  imports: [EmployeeModule, GraphQLFederationModule.forRoot(
    {
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      buildSchemaOptions: {
        orphanedTypes: [Project,Location]
      }
    }
  ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'employee-fed-db',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),],
  controllers: [],
  providers: [],
})
export class AppModule { }
