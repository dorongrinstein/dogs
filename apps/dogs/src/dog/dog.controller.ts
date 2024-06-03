import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DogService } from "./dog.service";
import { DogControllerBase } from "./base/dog.controller.base";

@swagger.ApiTags("dogs")
@common.Controller("dogs")
export class DogController extends DogControllerBase {
  constructor(
    protected readonly service: DogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
