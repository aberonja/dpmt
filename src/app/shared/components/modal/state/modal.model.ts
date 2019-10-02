export interface IModal {
  type: string;
  heading: string;
  text: string;
  primaryAction: string;
  id?: number;
}

export interface IModalState {
  isOpen: boolean;
  type: string;
  heading: string;
  text: string;
  primaryAction: string;
  id?: number;
}
