export type UiState = 'loading' | 'empty' | 'error' | 'success';
export type ReleasePhase = 'MVP_1_0' | 'V2_0';
export type RouteName =
  | 'login'
  | 'home'
  | 'queue'
  | 'detail'
  | 'checkin'
  | 'contract'
  | 'checkout'
  | 'walkin'
  | 'vehicle';

export type FulfillmentStage =
  | 'DETAIL'
  | 'CHECKIN'
  | 'PREAUTH'
  | 'CONTRACT'
  | 'CHECKOUT'
  | 'CHARGE'
  | 'UPGRADE'
  | 'ADDON'
  | 'RENEWAL'
  | 'SWAP';

export interface QuickAction {
  code: 'GO_PICKUP' | 'GO_RETURN' | 'CREATE_WALKIN' | 'OPEN_VEHICLE';
  label: string;
  enabled: boolean;
}

export interface FulfillmentCard {
  orderId: string;
  orderNo: string;
  bookingId?: string;
  customerSummary: string;
  vehicleSummary?: string;
  stage: FulfillmentStage;
  channelType: 'SELF_SERVICE' | 'WALKIN' | 'OTA' | 'OFFLINE';
  nextActionLabel: string;
  isMvpBlocked: boolean;
}

export interface FulfillmentOrder {
  orderId: string;
  orderNo: string;
  canonicalStatus: string;
  storeId: string;
  storeName: string;
  isSelfService: boolean;
  pickupTimeLocal?: string;
  returnTimeLocal?: string;
  assignedVehicleId?: string | null;
  assignedVehiclePlate?: string | null;
  nextStage: FulfillmentStage;
}
