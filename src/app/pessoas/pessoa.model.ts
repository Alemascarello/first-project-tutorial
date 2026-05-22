export type Sexo = 'masculino' | 'feminino' | 'outro';

export interface Pessoa {
  id: number;
  nome: string;
  idade: number;
  sexo: Sexo;
  dataNascimento: Date;
}

export interface PessoaFormulario {
  nome: string;
  idade: number | null;
  sexo: Sexo | null;
  dataNascimento: Date | null;
}

export const SEXO_OPCOES: { label: string; value: Sexo }[] = [
  { label: 'Masculino', value: 'masculino' },
  { label: 'Feminino', value: 'feminino' },
  { label: 'Outro', value: 'outro' },
];
