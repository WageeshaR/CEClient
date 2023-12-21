/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Price } from './price';

/**
 * 
 *
 * @export
 * @interface LicenseModel
 */
export interface LicenseModel {

    /**
     * @type {string}
     * @memberof LicenseModel
     */
    id?: string;

    /**
     * @type {string}
     * @memberof LicenseModel
     */
    licenseType: LicenseModelLicenseTypeEnum;

    /**
     * @type {number}
     * @memberof LicenseModel
     */
    frequency: number;

    /**
     * @type {number}
     * @memberof LicenseModel
     */
    defaultUnitSize: number;

    /**
     * @type {number}
     * @memberof LicenseModel
     */
    unitCount?: number;

    /**
     * @type {Price}
     * @memberof LicenseModel
     */
    premium: Price;
}

/**
 * @export
 * @enum {string}
 */
export enum LicenseModelLicenseTypeEnum {
    Individual = 'individual',
    Group = 'group',
    Institutional = 'institutional'
}

