import { ReadingStatus } from './readingStatus';
import { BookFormat } from './bookFormat';

export class Book{
    title: string;
    author: string;
    status?: string;
    format?: BookFormat;
    fromStore?: string
}