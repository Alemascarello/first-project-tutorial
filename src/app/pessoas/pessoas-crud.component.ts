import { DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import {
  Pessoa,
  PessoaFormulario,
  SEXO_OPCOES,
  Sexo,
} from './pessoa.model';

@Component({
  selector: 'app-pessoas-crud',
  imports: [
    DatePipe,
    FormsModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    SelectModule,
    DatePickerModule,
    FloatLabelModule,
    ConfirmDialogModule,
    ToastModule,
    ToolbarModule,
    TagModule,
    IconFieldModule,
    InputIconModule,
    CardModule,
  ],
  templateUrl: './pessoas-crud.component.html',
  styleUrl: './pessoas-crud.component.scss',
})
export class PessoasCrudComponent {
  private readonly confirmationService = inject(ConfirmationService);
  private readonly messageService = inject(MessageService);

  readonly sexoOpcoes = SEXO_OPCOES;
  readonly hoje = new Date();
  readonly pessoas = signal<Pessoa[]>([
    {
      id: 1,
      nome: 'Ana Silva',
      idade: 28,
      sexo: 'feminino',
      dataNascimento: new Date(1997, 2, 15),
    },
    {
      id: 2,
      nome: 'Carlos Souza',
      idade: 35,
      sexo: 'masculino',
      dataNascimento: new Date(1990, 7, 22),
    },
  ]);

  dialogVisivel = false;
  modoEdicao = false;
  pessoaEmEdicaoId: number | null = null;
  filtroGlobal = '';
  formulario: PessoaFormulario = this.criarFormularioVazio();

  private proximoId = 3;

  abrirNovo(): void {
    this.modoEdicao = false;
    this.pessoaEmEdicaoId = null;
    this.formulario = this.criarFormularioVazio();
    this.dialogVisivel = true;
  }

  abrirEdicao(pessoa: Pessoa): void {
    this.modoEdicao = true;
    this.pessoaEmEdicaoId = pessoa.id;
    this.formulario = {
      nome: pessoa.nome,
      idade: pessoa.idade,
      sexo: pessoa.sexo,
      dataNascimento: new Date(pessoa.dataNascimento),
    };
    this.dialogVisivel = true;
  }

  salvar(): void {
    if (!this.formularioValido) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Atenção',
        detail: 'Preencha todos os campos corretamente.',
      });
      return;
    }

    const dados = {
      nome: this.formulario.nome.trim(),
      idade: this.formulario.idade!,
      sexo: this.formulario.sexo!,
      dataNascimento: this.formulario.dataNascimento!,
    };

    if (this.modoEdicao && this.pessoaEmEdicaoId !== null) {
      this.pessoas.update((lista) =>
        lista.map((pessoa) =>
          pessoa.id === this.pessoaEmEdicaoId ? { ...pessoa, ...dados } : pessoa,
        ),
      );
      this.messageService.add({
        severity: 'success',
        summary: 'Atualizado',
        detail: 'Pessoa atualizada com sucesso.',
      });
    } else {
      this.pessoas.update((lista) => [
        ...lista,
        { id: this.proximoId++, ...dados },
      ]);
      this.messageService.add({
        severity: 'success',
        summary: 'Cadastrado',
        detail: 'Pessoa cadastrada com sucesso.',
      });
    }

    this.dialogVisivel = false;
  }

  confirmarExclusao(pessoa: Pessoa): void {
    this.confirmationService.confirm({
      message: `Deseja excluir ${pessoa.nome}?`,
      header: 'Confirmar exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Excluir',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => this.excluir(pessoa.id),
    });
  }

  excluir(id: number): void {
    this.pessoas.update((lista) => lista.filter((pessoa) => pessoa.id !== id));
    this.messageService.add({
      severity: 'info',
      summary: 'Excluído',
      detail: 'Pessoa removida com sucesso.',
    });
  }

  cancelar(): void {
    this.dialogVisivel = false;
  }

  get formularioValido(): boolean {
    return (
      this.formulario.nome.trim().length > 0 &&
      this.formulario.idade !== null &&
      this.formulario.idade >= 0 &&
      this.formulario.sexo !== null &&
      this.formulario.dataNascimento !== null
    );
  }

  obterLabelSexo(sexo: Sexo): string {
    return this.sexoOpcoes.find((opcao) => opcao.value === sexo)?.label ?? sexo;
  }

  obterSeveridadeSexo(sexo: Sexo): 'info' | 'warn' | 'secondary' {
    if (sexo === 'masculino') return 'info';
    if (sexo === 'feminino') return 'warn';
    return 'secondary';
  }

  private criarFormularioVazio(): PessoaFormulario {
    return {
      nome: '',
      idade: null,
      sexo: null,
      dataNascimento: null,
    };
  }
}
