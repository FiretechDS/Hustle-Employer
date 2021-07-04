import { Either } from '../../common/domain/Either';;
import { OffersAPIRepository } from '../../jobOffer/adapter/out/OffersAPIRepository';
import {JobApplicationProps} from '../../jobOffer/application/JobApplicationModel';
import { DataError } from '../../common/domain/DataError';

describe('API', () =>{
    test('Test de Integracion con API', async () => {
        var repository = new OffersAPIRepository();
        var loadResult: Either<DataError, JobApplicationProps[]> = await repository.loadOffers(100);
        
        expect(loadResult.isLeft()).toBe(false);
        expect(loadResult.isRight()).toBe(true);

    })
    
})