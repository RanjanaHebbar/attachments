using { miyasuta.media as db } from '../db/schema';

service Attachments {
    entity Files as projection on db.Files
}