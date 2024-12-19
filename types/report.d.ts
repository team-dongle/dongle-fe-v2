export interface ReportType {
  _id: number;
  title: string;
  images: string[];
  createdAt: Date;
  clubId: number;
}
export interface ReportDetailType extends ReportType {
  content: string;
}
