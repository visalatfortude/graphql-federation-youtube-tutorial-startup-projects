import { Directive } from "@nestjs/graphql"
import { ID } from "@nestjs/graphql"
import { Field, ObjectType } from "@nestjs/graphql"
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Location } from "./location.entity"
import { Project } from "./project.entity"

@ObjectType()
@Directive('@key(fields: "id")')
@Entity()
export class Employee {
    @Field((type)=> ID)
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Field()
    @Column()
    firstName: string
    @Field()
    @Column()
    lastName: string
    @Field()
    @Column()
    designation: string
    @Field({ nullable: true })
    @Column({ nullable: true })
    city: string

    @Field(() => Project)
    project: Project

    /*  @ManyToOne(() => Project, project => project.employees)
     @Field(() => Project)
     project: Project */

    @Field(() => Location)
    location: Location

    @Column()
    @Field()
    projectId: string

    @Column()
    @Field()
    locationId: string

}