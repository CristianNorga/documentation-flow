import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'sc-form-node-component',
  templateUrl: './form-node-component.component.html',
  styleUrls: ['./form-node-component.component.scss'],
})
export class FormNodeComponentComponent implements OnInit {
  form!: FormGroup;

  @Output() create = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => this.save(this.form));
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]], //(input)
      framework: [''], //(select) => inicales y completo
      hosting: [''], //(select) => cloud y onpremise
      version: [''], //(input)
      repository: [''], //(input)
      continuousDeployment: this.formBuilder.group({
        automatedDeliveryProcess: [''], //(checkbox) pipeline
        frequentDeliveries: [''], //(checkbox) or (dataPicker)
        automatedTesting: [''], //(checkbox) or (input: sonarLint)
        versionControl: [''], //(checkbox) or (input: git)
        monitoring: [''], //(checkbox)
      }),
      lastDeploy: [''], //(datePicker)
      unitTesting: [''], //(checkbox)
      wiki: [''], //(input: markdown or url)
      // lenguaje: [''],
    });
  }

  save(form: FormGroup) {
    //desde aca deberiamos manejar la logica para enviar la data para activar el boton y si no cumple, almenos guardar la data(por si el usuario se equivoca)
    if (form.valid) {
      this.create.emit(form.value);
    } else {
      form.markAllAsTouched();
    }
  }

  get nameField() {
    return this.form.get('name');
  }
  get frameworkField() {
    return this.form.get('framework');
  }
  get hostingField() {
    return this.form.get('hosting');
  }
  get versionField() {
    return this.form.get('version');
  }
  get repositoryField() {
    return this.form.get('repository');
  }
  get automatedDeliveryProcessField() {
    return this.form.get('continuousDeployment.automatedDeliveryProcess');
  }
  get frequentDeliveriesField() {
    return this.form.get('continuousDeployment.frequentDeliveries');
  }
  get automatedTestingField() {
    return this.form.get('continuousDeployment.automatedTesting');
  }
  get versionControlField() {
    return this.form.get('continuousDeployment.versionControl');
  }
  get monitoringField() {
    return this.form.get('continuousDeployment.monitoring');
  }
  get lastDeployField() {
    return this.form.get('lastDeploy');
  }
  get unitTestingField() {
    return this.form.get('unitTesting');
  }
  get wikiField() {
    return this.form.get('wiki');
  }
}
