/**
 * Encrypting JSON Web Encryption (JWE) in Flattened JSON Serialization
 *
 * @module
 */
import type * as types from '../../types.d.ts';
/**
 * The FlattenedEncrypt class is used to build and encrypt Flattened JWE objects.
 *
 * This class is exported (as a named export) from the main `'jose'` module entry point as well as
 * from its subpath export `'jose/jwe/flattened/encrypt'`.
 *
 */
export declare class FlattenedEncrypt {
    private _plaintext;
    private _protectedHeader;
    private _sharedUnprotectedHeader;
    private _unprotectedHeader;
    private _aad;
    private _cek;
    private _iv;
    private _keyManagementParameters;
    /** @param plaintext Binary representation of the plaintext to encrypt. */
    constructor(plaintext: Uint8Array);
    /**
     * Sets the JWE Key Management parameters to be used when encrypting. Use of this is method is
     * really only needed for ECDH based algorithms when utilizing the Agreement PartyUInfo or
     * Agreement PartyVInfo parameters. Other parameters will always be randomly generated when needed
     * and missing.
     *
     * @param parameters JWE Key Management parameters.
     */
    setKeyManagementParameters(parameters: types.JWEKeyManagementHeaderParameters): this;
    /**
     * Sets the JWE Protected Header on the FlattenedEncrypt object.
     *
     * @param protectedHeader JWE Protected Header.
     */
    setProtectedHeader(protectedHeader: types.JWEHeaderParameters): this;
    /**
     * Sets the JWE Shared Unprotected Header on the FlattenedEncrypt object.
     *
     * @param sharedUnprotectedHeader JWE Shared Unprotected Header.
     */
    setSharedUnprotectedHeader(sharedUnprotectedHeader: types.JWEHeaderParameters): this;
    /**
     * Sets the JWE Per-Recipient Unprotected Header on the FlattenedEncrypt object.
     *
     * @param unprotectedHeader JWE Per-Recipient Unprotected Header.
     */
    setUnprotectedHeader(unprotectedHeader: types.JWEHeaderParameters): this;
    /**
     * Sets the Additional Authenticated Data on the FlattenedEncrypt object.
     *
     * @param aad Additional Authenticated Data.
     */
    setAdditionalAuthenticatedData(aad: Uint8Array): this;
    /**
     * Sets a content encryption key to use, by default a random suitable one is generated for the JWE
     * enc" (Encryption Algorithm) Header Parameter.
     *
     * @deprecated You should not use this method. It is only really intended for test and vector
     *   validation purposes.
     *
     * @param cek JWE Content Encryption Key.
     */
    setContentEncryptionKey(cek: Uint8Array): this;
    /**
     * Sets the JWE Initialization Vector to use for content encryption, by default a random suitable
     * one is generated for the JWE enc" (Encryption Algorithm) Header Parameter.
     *
     * @deprecated You should not use this method. It is only really intended for test and vector
     *   validation purposes.
     *
     * @param iv JWE Initialization Vector.
     */
    setInitializationVector(iv: Uint8Array): this;
    /**
     * Encrypts and resolves the value of the Flattened JWE object.
     *
     * @param key Public Key or Secret to encrypt the JWE with. See
     *   {@link https://github.com/panva/jose/issues/210#jwe-alg Algorithm Key Requirements}.
     * @param options JWE Encryption options.
     */
    encrypt(key: types.CryptoKey | types.KeyObject | types.JWK | Uint8Array, options?: types.EncryptOptions): Promise<types.FlattenedJWE>;
}
