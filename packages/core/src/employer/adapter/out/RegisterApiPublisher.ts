import { DataError } from "../../../common/domain/DataError";
import { Either } from "../../../common/domain/Either";
import { ProfileProps, ProfileToDomainMapper } from "../../domain/EmployerDomainMapper";
import { profilePresentationProps } from "../../presentation/EmployerPresentationModel";
import { ProfileToPresentationMapper } from "../../presentation/EmployerPresentationMapper";
import { ProfileApplicationProps } from "../../application/EmployerAplicationModel";
import { RegisterEmployerUseCase } from "../../application/port/in/RegisterEmployerUseCase";
import { RegisterPort } from "../../application/port/out/RegisterPort";