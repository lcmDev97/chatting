// chattings.model.ts
import { IsNotEmpty, IsString } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaOptions, Types } from 'mongoose';
import { Socket as SocketModel } from './sockets.model';

const options: SchemaOptions = {
  collection: 'chattings',
  timestamps: true,
};

@Schema(options)
export class Chatting extends Document {
  @Prop({
    type: {
      _id: { type: Types.ObjectId, required: true, ref: 'sockets' }, // sockets가 socket.model.ts에서 만든 스키마임. id_는 그대로 사용하겠다는 뜻 
      id: { type: String },
      username: { type: String, required: true },
    },
  })
  @IsNotEmpty()
  user: SocketModel;   //sockets.model.ts 클래스이름임

  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  chat: string;
}

export const ChattingSchema = SchemaFactory.createForClass(Chatting);