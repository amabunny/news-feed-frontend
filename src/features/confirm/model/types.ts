export interface ConfirmOptions {
  title: string;
  confirmation: string;
}

export interface ConfirmProviderContext {
  confirm: (params: ConfirmOptions) => Promise<boolean>;
}
