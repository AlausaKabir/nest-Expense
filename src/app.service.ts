import { Injectable } from "@nestjs/common";
import { ReportType, data } from "./data";
import { v4 as uuid } from "uuid"
import { ReportResponseDto } from "./dtos/report.dto";


interface Report { amount: number, source: string }

interface UpdateReport { amount?: number, source?: string }

@Injectable()
export class AppService {

  getAllReportsService(type: ReportType): ReportResponseDto[] {
    return data.report.filter((report) => report.type === type).map(report => new ReportResponseDto(report))
  }

  getReportById(type: ReportType, id: string): ReportResponseDto {
    const report = data.report.filter((report) => report.type === type).find((report) => report.id === id)

    if (!report) return;


    return new ReportResponseDto(report)
  }

  createReport(type: ReportType, { amount, source }: Report): ReportResponseDto {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type
    }
    data.report.push(newReport)
    return new ReportResponseDto(newReport)
  }

  updateReport(type: ReportType, id: string, body: UpdateReport): ReportResponseDto {
    const updatedReport = data.report.filter((report) => report.type === type).find((report) => report.id === id);

    if (!updatedReport) return;

    const reportIndex = data.report.findIndex((report) => report.id === updatedReport.id)
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date()
    }

    return new ReportResponseDto(data.report[reportIndex])

  }


  deleteReport(id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id)

    if (reportIndex === -1) return "The said Data is not Found";

    data.report.splice(reportIndex, 1);

    return 'deleted'
  }
} 