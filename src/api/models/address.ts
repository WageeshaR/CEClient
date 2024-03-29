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

import { Country } from './country';

/**
 * 
 *
 * @export
 * @interface Address
 */
export interface Address {

    /**
     * @type {string}
     * @memberof Address
     */
    id?: string;

    /**
     * @type {string}
     * @memberof Address
     */
    line1: string;

    /**
     * @type {string}
     * @memberof Address
     */
    line2?: string;

    /**
     * @type {string}
     * @memberof Address
     */
    city: string;

    /**
     * @type {string}
     * @memberof Address
     */
    postalCode: string;

    /**
     * @type {string}
     * @memberof Address
     */
    county?: string;

    /**
     * @type {Country}
     * @memberof Address
     */
    country: Country;
}
