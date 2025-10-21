import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Inter {}
export interface Product {
  Id: number;
  Name: string;
  Category: string;
  Views: number;
  Description: string;
  IsDonateable: boolean;
  LenderId: number;
  Lender : User;
  ImageUrls: string[];
  Reviews: Review[];
}
export interface User{
  Id?: number;
  Username?: string;
  Email?: string;
  DateOfBirth?: Date;
  Age?: number;
  ProfilePictureUrl?: string;
  Bio?: string;
  Location?: string;
  Permisions: UserRole;
  Balance?: number;
  AvarageRating?: number;
  ListedProducts?: Product[];
  BorrowedProducts?: Product[];
  Reviews?: Review[];
  IsVerified?: boolean;
  IsBanned?: boolean;
  LastLogin?: Date;
  DateCreated?: Date;
}
export interface Review{
  Id: number;
  ProductId: number;
  Product: Product;
  UserId: number;
  User: User;
  Title: string;
  Content: string;
  Rating: number;
}

export interface ApiResponse{
  code: number;
  message: string;
  data?: any;
}


export enum UserRole
{
  Guest,
  User,
  Admin
}
