// Database types based on schema
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
  
  // Additional fields for comprehensive inspection data
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
  imgbuffer?: Buffer;
  img_name?: string;
}

export interface Driver {
  id: number;
  lastname?: string;
  firstname?: string;
  drivertype?: string;
  tractorno?: string;
}

export interface EmailSettings {
  id: number;
  lastname?: string;
  firstname?: string;
  reporttype?: string;
  emailaddr?: string;
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

// Pagination types
export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}