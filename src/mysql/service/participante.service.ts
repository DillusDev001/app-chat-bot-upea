import { Repository } from "typeorm";
import { Participante } from "../entity/participante.entity";
import { ParticipanteDto } from "../dto/participante.dto";
import { ServiceResult } from "~/interfaces/service.result";
import { format } from 'date-fns';

export class ParticipanteService {

    constructor(private participanteRepository: Repository<Participante>) { }

    async createParticipante(participanteDto: any): Promise<ServiceResult> {
        const serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const busqueda = await this.findByParticipante('ci', participanteDto.ci, 'ASC');

        if (!busqueda.boolean) {

            const object = this.participanteRepository.create(participanteDto);
            await this.participanteRepository.save(object);

            serviceResult.boolean = true;
            serviceResult.message = 'Participante se ha agregado correctamente.';
            serviceResult.number = 1;

        } else {
            // Actualizar fec_last
            const data = {
                fec_last: format(new Date(), 'yyyy-MM-dd HH:mm:ss')
            };

            const update = await this.updateParticipante(participanteDto.id, data);

            if (update.boolean) {
                serviceResult.boolean = true;
                serviceResult.message = update.message;
                serviceResult.number = 1;
            } else {
                serviceResult.message = update.message;
                serviceResult.object = update.object
            }
        }

        return serviceResult;
    }

    async findByParticipante(attribute: string, value: string, orderBy: 'ASC' | 'DESC'): Promise<ServiceResult> {
        const serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const result = await this.participanteRepository
            .createQueryBuilder()
            .orderBy(attribute, orderBy)
            .where(attribute + ' like :value', { value: '%' + value + '%' })
            //.andWhere(estado = 1)
            .getMany()

        const count = result.length;

        serviceResult.boolean = count > 0 ? true : false;
        serviceResult.message = count + ' Participante(s) encontrado(s).';
        serviceResult.number = count;
        serviceResult.data = result;

        return serviceResult;
    }

    async updateParticipante(id: string, updateParticipanteDto: any): Promise<ServiceResult> {
        const serviceResult = { boolean: false, message: '', number: 0, object: null, data: null } as ServiceResult;

        const result = await this.participanteRepository.update(id, updateParticipanteDto);

        serviceResult.boolean = result.affected === 1 ? true : false;
        serviceResult.message = 'Se ha actualizado correctamente.';
        serviceResult.number = result.affected;

        return serviceResult;
    }
}