import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DogModuleBase } from "./base/dog.module.base";
import { DogService } from "./dog.service";
import { DogController } from "./dog.controller";
import { DogResolver } from "./dog.resolver";

@Module({
  imports: [DogModuleBase, forwardRef(() => AuthModule)],
  controllers: [DogController],
  providers: [DogService, DogResolver],
  exports: [DogService],
})
export class DogModule {}
