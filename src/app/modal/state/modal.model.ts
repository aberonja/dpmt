export interface IModal {
  type: string;
  id?: number;
}

export interface IModalState {
  isOpen: boolean;
  type: string;
  id?: number;
}
