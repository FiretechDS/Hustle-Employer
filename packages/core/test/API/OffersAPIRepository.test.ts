import { Either } from '../../src/common/domain/Either';;
import { OffersAPIRepository } from '../../src/jobOffer/adapter/out/OffersAPIRepository';
import {JobApplicationProps} from '../../src/jobOffer/application/JobApplicationModel';
import { DataError } from '../../src/common/domain/DataError';

describe('Load offers integration test', () =>{
    test('Test de Integracion con API', async () => {
        var repository = new OffersAPIRepository();
        var loadResult: Either<DataError, JobApplicationProps[]> = await repository.loadOffers(100);
        loadResult.fold(
            (error)=>console.log(error),
            ()=>{}
        )
        expect(loadResult.isLeft()).toBe(false);
        expect(loadResult.isRight()).toBe(true);

    })
    
})