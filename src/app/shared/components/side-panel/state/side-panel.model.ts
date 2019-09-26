export interface ISidePanel {
  type: string;
  id?: number;
}

export interface ISidePanelState {
  isOpen: boolean;
  type: string;
  id?: number;
}
