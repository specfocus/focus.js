export interface ViewState {
  sidebar: {
    status: 'collapsed' | 'expanded';
  }
}

export interface ViewActions {
  sidebar: {
    collapse: () => void;
    expand: () => void;
    setStatus: (value: 'collapsed' | 'expanded') => void;
    toggle: () => void;
  }
}

export type ViewValue = ViewState & ViewActions;

export const ViewContext: React.Context<ViewValue>;

export const useView: () => ViewValue;