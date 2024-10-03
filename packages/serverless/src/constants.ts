import type {
	AudioCodec,
	ChromiumOptions,
	ColorSpace,
	FrameRange,
	LogLevel,
	PixelFormat,
	ProResProfile,
	StillImageFormat,
	ToOptions,
	VideoImageFormat,
	X264Preset,
} from '@remotion/renderer';
import type {BrowserSafeApis} from '@remotion/renderer/client';
import type {CloudProvider} from './still';

// Needs to be in sync with renderer/src/options/delete-after.ts#L7
export const expiryDays = {
	'1-day': 1,
	'3-days': 3,
	'7-days': 7,
	'30-days': 30,
} as const;

export type DeleteAfter = keyof typeof expiryDays;

export enum ServerlessRoutines {
	info = 'info',
	start = 'start',
	launch = 'launch',
	status = 'status',
	renderer = 'renderer',
	still = 'still',
	compositions = 'compositions',
}

export type CustomCredentialsWithoutSensitiveData = {
	endpoint: string;
};

export type CustomCredentials<Provider extends CloudProvider> =
	CustomCredentialsWithoutSensitiveData & {
		accessKeyId: string | null;
		secretAccessKey: string | null;
		region?: Provider['region'];
	};

export type OutNameInput<Provider extends CloudProvider> =
	| string
	| {
			bucketName: string;
			key: string;
			s3OutputProvider?: CustomCredentials<Provider>;
	  };

export type SerializedInputProps =
	| {
			type: 'bucket-url';
			hash: string;
			bucketName: string;
	  }
	| {
			type: 'payload';
			payload: string;
	  };

export const serverlessCodecs = [
	'h264',
	'h265',
	'vp8',
	'vp9',
	'mp3',
	'aac',
	'wav',
	'gif',
	'prores',
] as const;

export type ServerlessCodec = (typeof serverlessCodecs)[number];
export type Privacy = 'public' | 'private' | 'no-acl';

export type DownloadBehavior =
	| {
			type: 'play-in-browser';
	  }
	| {
			type: 'download';
			fileName: string | null;
	  };

type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

export type WebhookOption = Prettify<
	| null
	| ({
			url: string;
			secret: string | null;
	  } & Partial<
			ToOptions<{
				customData: typeof BrowserSafeApis.options.webhookCustomDataOption;
			}>
	  >)
>;

export type ServerlessStatusPayload<Provider extends CloudProvider> = {
	type: ServerlessRoutines.status;
	bucketName: string;
	renderId: string;
	version: string;
	logLevel: LogLevel;
	forcePathStyle: boolean;
	s3OutputProvider: CustomCredentials<Provider> | null;
};

export type ServerlessStartPayload<Provider extends CloudProvider> = {
	rendererFunctionName: string | null;
	type: ServerlessRoutines.start;
	serveUrl: string;
	composition: string;
	framesPerLambda: number | null;
	inputProps: SerializedInputProps;
	codec: ServerlessCodec;
	audioCodec: AudioCodec | null;
	imageFormat: VideoImageFormat;
	crf: number | undefined;
	envVariables: Record<string, string> | undefined;
	pixelFormat: PixelFormat | undefined;
	proResProfile: ProResProfile | undefined;
	x264Preset: X264Preset | null;
	jpegQuality: number | undefined;
	maxRetries: number;
	privacy: Privacy;
	logLevel: LogLevel;
	frameRange: FrameRange | null;
	outName: OutNameInput<Provider> | null;
	timeoutInMilliseconds: number;
	chromiumOptions: ChromiumOptions;
	scale: number;
	everyNthFrame: number;
	numberOfGifLoops: number | null;
	concurrencyPerLambda: number;
	downloadBehavior: DownloadBehavior;
	muted: boolean;
	version: string;
	overwrite: boolean;
	audioBitrate: string | null;
	videoBitrate: string | null;
	encodingMaxRate: string | null;
	encodingBufferSize: string | null;
	webhook: WebhookOption;
	forceHeight: number | null;
	forceWidth: number | null;
	bucketName: string | null;
	offthreadVideoCacheSizeInBytes: number | null;
	deleteAfter: DeleteAfter | null;
	colorSpace: ColorSpace | null;
	preferLossless: boolean;
	forcePathStyle: boolean;
	metadata: Record<string, string> | null;
};

export type ServerlessPayloads<Provider extends CloudProvider> = {
	info: {
		type: ServerlessRoutines.info;
		logLevel: LogLevel;
	};
	start: ServerlessStartPayload<Provider>;
	launch: {
		rendererFunctionName: string | null;
		type: ServerlessRoutines.launch;
		serveUrl: string;
		composition: string;
		framesPerLambda: number | null;
		bucketName: string;
		inputProps: SerializedInputProps;
		renderId: string;
		imageFormat: VideoImageFormat;
		codec: ServerlessCodec;
		audioCodec: AudioCodec | null;
		crf: number | undefined;
		envVariables: Record<string, string> | undefined;
		pixelFormat: PixelFormat | undefined;
		proResProfile: ProResProfile | undefined;
		x264Preset: X264Preset | null;
		jpegQuality: number | undefined;
		maxRetries: number;
		privacy: Privacy;
		logLevel: LogLevel;
		frameRange: FrameRange | null;
		outName: OutNameInput<Provider> | null;
		timeoutInMilliseconds: number;
		chromiumOptions: ChromiumOptions;
		scale: number;
		everyNthFrame: number;
		numberOfGifLoops: number | null;
		concurrencyPerLambda: number;
		downloadBehavior: DownloadBehavior;
		muted: boolean;
		overwrite: boolean;
		audioBitrate: string | null;
		videoBitrate: string | null;
		encodingMaxRate: string | null;
		encodingBufferSize: string | null;
		webhook: WebhookOption;
		forceHeight: number | null;
		forceWidth: number | null;
		offthreadVideoCacheSizeInBytes: number | null;
		deleteAfter: DeleteAfter | null;
		colorSpace: ColorSpace | null;
		preferLossless: boolean;
		forcePathStyle: boolean;
		metadata: Record<string, string> | null;
	};
	status: ServerlessStatusPayload<Provider>;
	renderer: {
		concurrencyPerLambda: number;
		type: ServerlessRoutines.renderer;
		serveUrl: string;
		frameRange: [number, number];
		chunk: number;
		bucketName: string;
		composition: string;
		fps: number;
		height: number;
		width: number;
		durationInFrames: number;
		retriesLeft: number;
		inputProps: SerializedInputProps;
		renderId: string;
		imageFormat: VideoImageFormat;
		codec: ServerlessCodec;
		crf: number | undefined;
		proResProfile: ProResProfile | undefined;
		x264Preset: X264Preset | null;
		pixelFormat: PixelFormat | undefined;
		jpegQuality: number | undefined;
		envVariables: Record<string, string> | undefined;
		privacy: Privacy;
		attempt: number;
		logLevel: LogLevel;
		timeoutInMilliseconds: number;
		chromiumOptions: ChromiumOptions;
		resolvedProps: SerializedInputProps;
		scale: number;
		everyNthFrame: number;
		muted: boolean;
		audioBitrate: string | null;
		videoBitrate: string | null;
		encodingBufferSize: string | null;
		encodingMaxRate: string | null;
		launchFunctionConfig: {
			version: string;
		};
		preferLossless: boolean;
		offthreadVideoCacheSizeInBytes: number | null;
		deleteAfter: DeleteAfter | null;
		colorSpace: ColorSpace | null;
		compositionStart: number;
		framesPerLambda: number;
		progressEveryNthFrame: number;
		forcePathStyle: boolean;
		metadata: Record<string, string> | null;
	};
	still: {
		type: ServerlessRoutines.still;
		serveUrl: string;
		composition: string;
		inputProps: SerializedInputProps;
		imageFormat: StillImageFormat;
		envVariables: Record<string, string>;
		attempt: number;
		jpegQuality: number | undefined;
		maxRetries: number;
		frame: number;
		privacy: Privacy;
		logLevel: LogLevel;
		outName: OutNameInput<Provider> | null;
		timeoutInMilliseconds: number;
		chromiumOptions: ChromiumOptions;
		scale: number;
		downloadBehavior: DownloadBehavior;
		version: string;
		forceHeight: number | null;
		forceWidth: number | null;
		bucketName: string | null;
		offthreadVideoCacheSizeInBytes: number | null;
		deleteAfter: DeleteAfter | null;
		streamed: boolean;
		forcePathStyle: boolean;
		metadata: Record<string, string> | null;
	};
	compositions: {
		type: ServerlessRoutines.compositions;
		version: string;
		chromiumOptions: ChromiumOptions;
		logLevel: LogLevel;
		inputProps: SerializedInputProps;
		envVariables: Record<string, string> | undefined;
		timeoutInMilliseconds: number;
		serveUrl: string;
		bucketName: string | null;
		offthreadVideoCacheSizeInBytes: number | null;
		forcePathStyle: boolean;
	};
};

export type ServerlessPayload<Provider extends CloudProvider> =
	ServerlessPayloads<Provider>[ServerlessRoutines];

export const REMOTION_BUCKET_PREFIX = 'remotionlambda-';

export type OutNameOutput<Provider extends CloudProvider> = {
	renderBucketName: string;
	key: string;
	customCredentials: CustomCredentials<Provider> | null;
};

export type OutNameInputWithoutCredentials =
	| string
	| {
			bucketName: string;
			key: string;
			s3OutputProvider?: CustomCredentialsWithoutSensitiveData;
	  };

export const rendersPrefix = (renderId: string) => `renders/${renderId}`;

export const outStillName = (renderId: string, imageFormat: StillImageFormat) =>
	`${rendersPrefix(renderId)}/out.${imageFormat}`;

export const outName = (renderId: string, extension: string) =>
	`${rendersPrefix(renderId)}/out.${extension}`;

export const customOutName = <Provider extends CloudProvider>(
	renderId: string,
	bucketName: string,
	name: OutNameInput<Provider>,
): OutNameOutput<Provider> => {
	if (typeof name === 'string') {
		return {
			renderBucketName: bucketName,
			key: `${rendersPrefix(renderId)}/${name}`,
			customCredentials: null,
		};
	}

	return {
		key: name.key,
		renderBucketName: name.bucketName,
		customCredentials: name.s3OutputProvider ?? null,
	};
};

export const overallProgressKey = (renderId: string) =>
	`${rendersPrefix(renderId)}/progress.json`;

export const artifactName = (renderId: string, name: string) =>
	`${rendersPrefix(renderId)}/artifacts/${name}`;
