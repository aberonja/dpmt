export interface ISnackBar {
  type: string;
  message: string;
  id: number;
}

export interface ISnackBarState {
  isOpen: boolean;
  type: string;
  message: string;
  id: number;
}
