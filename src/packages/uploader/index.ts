import { ReactNode } from 'react'
import { Uploader } from './uploader'

export type { UploaderProps } from './uploader'

type FileItem = {
  status?: FileItemStatus

  message?: string

  uid?: string | number

  name?: string

  url?: string

  type?: 'image' | 'list' | string

  path?: string

  loadingIcon?: ReactNode

  failIcon?: ReactNode

  file?: File
}

type FileItemStatus = 'ready' | 'uploading' | 'success' | 'error'

type FileType<T> = { [key: string]: T }

export type { FileType, FileItem, FileItemStatus }
export default Uploader
