import { HttpService } from '@nestjs/axios';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { IncomingHttpHeaders } from 'http';
import IUser from '@domain/entity/user/IUser';
import IValidateResponse from './user/interface/IValidateResponse';
import ValidateUserDTO from './user/dto/output/ValidateUserDTO';

@Injectable()
class RouteAuthentication {
  constructor(
    private readonly _httpService: HttpService,
  ) {}

  validateUser = async (headers: IncomingHttpHeaders): Promise<IUser> => {
    const url = `${process.env.GLOBAL_API_URL}/microservices/validations/user`;
    const body = { 
      token: headers.authorization,
    };
    const config: AxiosRequestConfig = {
      headers: { 
        Authorization: process.env.TOKEN, 
      }, 
    };
    
    try {
      const { data } = await this
        ._httpService.axiosRef.post<IValidateResponse>(url, body, config);

      return new ValidateUserDTO(data);
    } catch {
      throw new UnauthorizedException({
        message: 'Falha na validação do token.',
        title: 'Acesso não-autorizado',
      });
    }
  };

  validateAdmin = async (headers: IncomingHttpHeaders): Promise<void> => {
    const url = `${process.env.GLOBAL_API_URL}/microservices/validations/dashboard`;
    const body = { 
      token: headers.authorization,
    };
    const config: AxiosRequestConfig = {
      headers: { 
        Authorization: process.env.TOKEN, 
      }, 
    };
    
    try {
      await this._httpService.axiosRef.post(url, body, config);
    } catch {
      throw new UnauthorizedException({
        message: 'Falha na validação do token.',
        title: 'Acesso não-autorizado',
      });
    }
  };
}

export default RouteAuthentication;
