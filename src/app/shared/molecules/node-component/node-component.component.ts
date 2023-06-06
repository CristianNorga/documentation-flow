import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'sc-node-component',
  templateUrl: './node-component.component.html',
  styleUrls: ['./node-component.component.scss'],
})
export class NodeComponentComponent implements OnInit {
  form!: FormGroup;

  @Output() create = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    //escuchar un campo del formulario o todo el formulario
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: [''], //(input)
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

  save() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
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
