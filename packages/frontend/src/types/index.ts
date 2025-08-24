// Shared types for frontend application
export interface Inspection {
  id: number;
  inspectiontype?: string;
  inspdate?: Date;
  inspsite?: string;
  inspector?: string;
  tractorno?: string;
  tcitruck?: boolean;
  trailerno?: string;
  tcitrailer?: boolean;
  moveno?: string;
  state?: string;
  licenseplate?: string;
  tractorstatus?: string;
  tractorinspection?: boolean;
  trailerinspection?: boolean;
  ctpatinspection?: boolean;
  drivervehicleinspection?: boolean;
  drivername?: string;
  companyname?: string;
  note?: string;
  recguid?: string;
}

export interface InspectionImage {
  id: number;
  inspectionid?: number;
  inspectionItem?: string;
  Inspectiontype?: string;
  datetimestamp?: Date;
  img_image?: string;
  img_name?: string;
}

export interface Driver {
  id: number;
  lastname?: string;
  firstname?: string;
  drivertype?: string;
  tractorno?: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  timestamp: string;
}

export interface ApiError {
  error: {
    code: string;
    message: string;
    details?: unknown;
    timestamp: string;
  };
}

// UI State types
export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

export interface FilterState {
  dateFrom?: Date;
  dateTo?: Date;
  inspector?: string;
  tractorno?: string;
  status?: string;
}