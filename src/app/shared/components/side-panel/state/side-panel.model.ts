export interface ISidePanel {
  type: string;
  heading?: string;
  id?: number;
}

export interface ISidePanelState {
  isOpen: boolean;
  type: string;
  heading?: string;
  id?: number;
}
