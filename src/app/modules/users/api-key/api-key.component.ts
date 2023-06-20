import { Component } from '@angular/core';
import { ApiKeyDto } from './dto/ApiKeyDto';
import { ApiKeyService } from '../service/api-key.service';

@Component({
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.css']
})
export class ApiKeyComponent {
    public apiKey: string = '';
    public limitedFlag:boolean = false;
    public apiKeyDto:ApiKeyDto = {} as ApiKeyDto;
    constructor(private apiKeyService: ApiKeyService) { }

    generateApiKey() {
      this.apiKeyDto.limited = this.limitedFlag;
      this.apiKeyService.generateApiKey(this.apiKeyDto).subscribe(data => {
        console.log(data)
        this.apiKey = data;
      })
    }

}
