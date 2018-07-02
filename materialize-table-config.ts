export interface MaterializeTableConfig {
  headers: {
    colInData: string;
    colToShow: string;
    rightAlign?: boolean;
    postfix?: string;
  }[],
  title: string;
  initialSortBy: string;
  initialSortOrderAsc: boolean;
  isInvitationTr?: boolean;
  noCard?: boolean;
}
