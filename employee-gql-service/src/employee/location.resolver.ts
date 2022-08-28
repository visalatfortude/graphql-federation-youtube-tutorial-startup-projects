import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { Employee } from './entity/employee.entity';
import { Location } from './entity/location.entity';
import { Project } from './entity/project.entity';

@Resolver((of) => Location)
export class LocationResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @ResolveField((of)=> [Employee])
  employees(@Parent() location:Location):Promise<Employee[]>{
    console.log("resolving employees", location.id)
    return this.employeeService.forLocation(location.id);
  }
}
