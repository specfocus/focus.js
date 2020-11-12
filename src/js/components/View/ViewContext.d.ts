declare interface ViewState {
  sidebar: {
    status: 'collapsed' | 'expanded';
  }  
}

declare interface ViewActions {

}

declare type ViewContextValue = ViewState & ViewActions;

declare const ViewContext: React.Context<ViewContextValue>;

declare const useView: () => ViewContextValue;