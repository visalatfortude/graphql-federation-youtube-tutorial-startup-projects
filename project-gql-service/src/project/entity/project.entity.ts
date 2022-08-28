import { Directive } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
@Directive('@key(fields: "id")')
export class Project {

  @Field((type)=> ID)
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Field()
  @Column()
  name: string
  @Field(() => Int)
  @Column()
  code: number

  /*  @OneToMany(() => Employee, employee => employee.project)
   @Field(() => [Employee], { nullable: true })
   employees: Employee[] */

}